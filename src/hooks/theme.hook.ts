import { EThemeMode } from "@/types/countries";
import type { Ref } from "vue";
import { ref } from "vue";

interface UseThemeHook {
  themeMode: Ref<EThemeMode>;
  checkThemeMode: () => EThemeMode;
  changeThemeMode: () => void;
}

export const useThemeHook = (): UseThemeHook => {
  const themeMode = ref(EThemeMode.LIGHT_MODE);

  const checkThemeMode = () => {
    themeMode.value = localStorage.getItem("themeMode") as EThemeMode;
    if (themeMode.value !== EThemeMode.LIGHT_MODE) {
      document.querySelector(":root")?.classList.toggle("dark-theme");
    }

    return themeMode.value;
  };

  const changeThemeMode = () => {
    themeMode.value =
      themeMode.value === EThemeMode.LIGHT_MODE
        ? EThemeMode.DARK_MODE
        : EThemeMode.LIGHT_MODE;

    localStorage.setItem("themeMode", themeMode.value);
    document.querySelector(":root")?.classList.toggle("dark-theme");
  };

  return {
    themeMode,
    checkThemeMode,
    changeThemeMode,
  };
};
