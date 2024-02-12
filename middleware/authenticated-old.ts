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
        const users = await supabase.from('Users').select("*").eq("full_access", "TRUE");

        // Initialize variables
        let isPrivatePage = false;
        let isPublicPage = false;
        let publicPages = false || [];
        let idExists = false;

        // Check if the requested page is private
        if (privatePages)
            isPrivatePage = privatePages.some(obj => to.fullPath.includes(`${obj.slug}`));

        if (isPrivatePage) {
            // Handle private pages
            if (!user.value) {
                console.log("1");
                return navigateTo('/auth/log-in/');  // Redirect to login if no user is logged in
            } else if (users.data && users.data.length > 0 && user.value) {
                // Check if the current user has full access to all pages
                const idExists = users.data.some(obj => obj.user_id === user.value.id);
                
                // Redirect to base page if user has no rights
                if (!idExists && to.fullPath.indexOf("/join-beta/") === -1) {
                    console.log("2");
                    return navigateTo('/join-beta/');
                }
            }
        } else {
            // Handle public pages
            const queryPublicPages = groq`*[_type == "page" && isPrivate != true]{'slug' : slug.current}`;
            publicPages = await sanity.fetch(queryPublicPages);
            isPublicPage = publicPages.some(obj => to.fullPath.includes(`/${obj.slug}`) || `/` === to.fullPath);
            
            if (!isPublicPage && to.fullPath !== "/join-beta/") {
                // Check user access for restricted public pages
                if (users.data && user.value) {
                    idExists = users.data.some(obj => obj.user_id === user.value.id);
                    
                    if (to.fullPath === '/auth/log-in/' || to.fullPath === '/auth/sign-up/') {
                        console.log("3");
                        return navigateTo('/');
                    }

                    if (!idExists) {
                        console.log("4");
                        return navigateTo('/auth/log-in/');
                    }
                } else {
                    console.log("5");
                    return navigateTo('/auth/log-in/');
                }
            } else {
                // Handle special cases for specific paths
                if (to.fullPath.indexOf("/auth") > -1 && to.fullPath.indexOf("/update-password") != -1) {
                    if (users.data && user.value) {
                        idExists = users.data.some(obj => obj.user_id === user.value.id);
                        if (idExists) {
                            console.log("6");
                            return navigateTo('/library/');
                        } else {
                            console.log("7");
                            return navigateTo('/join-beta/');
                        }
                    }
                }

                if (to.fullPath.indexOf("/join-beta") > -1) {
                    if (users.data && user.value) {
                        idExists = users.data.some(obj => obj.user_id === user.value.id);
                        console.log(idExists);

                        if (idExists) {
                            console.log("8");
                            return navigateTo('/library/');
                        }
                    }
                }
            }
        }
    } catch (error) {
        // Handle errors and redirect to base page
        console.log(error);
        console.log("9");
        return navigateTo('/auth/log-in/');
    }
});
