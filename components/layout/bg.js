const Background = ({children}) => {

    return (
        // Remove transition-all to disable the background color transition.
        <div className="bg-white dark:bg-black transition-all">
            {children}
        </div>
    )
}

export default Background;