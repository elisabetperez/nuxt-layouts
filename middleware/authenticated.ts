// Import necessary modules
export default defineNuxtRouteMiddleware(async (to, from) => {
    
    try {
        // Get user information from Supabase and Sanity
        const user = useSupabaseUser();
        const supabase = useSupabaseClient();
        const sanity = useSanity();

        // Query to fetch private pages from Sanity
        const queryPrivatePages = groq`*[_type == "page" && isPrivate == true]{'slug' : slug.current}`;
        const privatePages = await sanity.fetch(queryPrivatePages);
        
        // Query to fetch all users with full access from Supabase
        const fullAccessUsers = await supabase.from('Users').select("*").eq("full_access", "TRUE");

        // Initialize variables
        let isPrivatePage = false;
        let isPublicPage = false;

        let publicPages = false || [];
        let actualUserhasAccess = false;

        // Check if the actual page is private
        if (privatePages){
            isPrivatePage = privatePages.some(obj => to.fullPath.includes(`${obj.slug}`));
        }

        /**
         * Private pages ( Library, Components , Properties)
         */
        if (isPrivatePage) {
            if (!user.value) {  // No user is logged in and tries to access a private page ,
                return navigateTo('/auth/log-in/');  // Redirect to log-in if no user is logged in
            } else if (fullAccessUsers.data && fullAccessUsers.data.length > 0 && user.value) {  //  User is logged in and fullAccessUsers is more than 1
                // Checksif the current user has full access to all pages
                actualUserhasAccess = fullAccessUsers.data.some(obj => obj.user_id === user.value.id);
                
                // Redirect to base page if user has no rights
                // and the actual page is not join-beta
                if (!actualUserhasAccess && to.fullPath.indexOf("/join-beta/") === -1) {
                    return navigateTo('/join-beta/');
                }
            }
        } else {
            // get public pages
            const queryPublicPages = groq`*[_type == "page" && isPrivate != true]{'slug' : slug.current}`;
            publicPages = await sanity.fetch(queryPublicPages);
            isPublicPage = publicPages.some(obj => to.fullPath.includes(`/${obj.slug}`) || `/` === to.fullPath);

            // Public Pages (join beta, login, signup ...)
            if(isPublicPage){
                // Handle special cases for specific paths
                if (to.fullPath.indexOf("/auth") > -1) {
                    if (fullAccessUsers.data && user.value) { //  User is logged in and fullAccessUsers is more than 1
                        actualUserhasAccess = fullAccessUsers.data.some(obj => obj.user_id === user.value.id);
                        if (actualUserhasAccess) {
                            return navigateTo('/library/');
                        } else {
                            return navigateTo('/join-beta/');
                        }
                    }
                }

                // We are in join beta page
                if (to.fullPath.indexOf("join-beta") > -1) {
                    if (fullAccessUsers.data && user.value) {//  User is logged in and fullAccessUsers is more than 1
                        actualUserhasAccess = fullAccessUsers.data.some(obj => obj.user_id === user.value.id);
                        if (actualUserhasAccess) { // User has access to the public pages
                            return navigateTo('/library/');
                        }
                    }else{
                        // User is in Join beta, and has no right to see public pages
                        return navigateTo('/auth/log-in/');
                    }
                }
            }

            // if the page is components or properties  
            if (!isPublicPage) {
                // Check user access for restricted public pages
                if (fullAccessUsers.data && user.value) {
                    actualUserhasAccess = fullAccessUsers.data.some(obj => obj.user_id === user.value.id);
                    // We are in login or sign up page
                    if (to.fullPath.indexOf("log-in") > -1 || to.fullPath.indexOf("sign-up") > -1 || to.fullPath.indexOf("update-password") > -1) {
                        return navigateTo('/');
                    }

                    if (!actualUserhasAccess) { // User has NO access to the components or properties pages
                        return navigateTo('/auth/log-in/');
                    }
                } else {
                    return navigateTo('/auth/log-in/'); // User has NO access to the components or properties pages
                }
            }
        }
    } catch (error) {
        // Handle errors and redirect to base page
        console.log(error);
        return navigateTo('/auth/log-in/');
    }
});
