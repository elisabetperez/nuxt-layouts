import { RouterView, useRouter, useRoute } from "vue-router";

export function useAuth() {
  const validateEmail = (str: string) => {
    if (!str) return false;
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(str);
  };

  return {
    validateEmail,
  };
}
