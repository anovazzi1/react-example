export default function Icon({children, tailwindClasses}){
    return (
        <div className={tailwindClasses}>
            {children}
        </div>
    )
}