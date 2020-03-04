export default function(window, ref, loadingFunc) {
  return () => {
    const windowHeight = window.innerHeight;
    const { bottom } = ref.current.getBoundingClientRect();
    if (bottom <= windowHeight) {
      loadingFunc();
    }
  };
}
