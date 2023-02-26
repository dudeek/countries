interface UseCommonHook {
  handleError: (message: string) => void;
}

export const useCommon = (): UseCommonHook => {
  const handleError = (message: string) => {
    window.alert(message);
  };

  return {
    handleError,
  };
};
