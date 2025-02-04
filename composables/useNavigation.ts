export const useNavigation = () => {
    const navState = useState('navState', () => false)

    const triggerMenu = (bool: boolean) => {
        navState.value = bool
    }

    return {
        navState,
        triggerMenu
    }
}