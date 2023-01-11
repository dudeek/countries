import { EThemeMode } from "@/types/countries";
import type { Ref } from "vue";
import { ref } from "vue";

interface UseThemeHook {
  themeMode: Ref<EThemeMode>;
  checkThemeMode: () => void;
  changeThemeMode: () => void;
}

export const useTheme = (): UseThemeHook => {
  const themeMode = ref(
    (localStorage.getItem("themeMode") as EThemeMode) || EThemeMode.LIGHT_MODE
  );

  const themeToggle = () => {
    document.querySelector(":root")?.classList.toggle("dark-theme");
  };

  const checkThemeMode = () => {
    if (themeMode.value !== EThemeMode.LIGHT_MODE) {
      themeToggle();
    }
  };

  const changeThemeMode = () => {
    themeMode.value =
      themeMode.value === EThemeMode.LIGHT_MODE
        ? EThemeMode.DARK_MODE
        : EThemeMode.LIGHT_MODE;

    localStorage.setItem("themeMode", themeMode.value);
    themeToggle();
  };

  return {
    themeMode,
    checkThemeMode,
    changeThemeMode,
  };
};
