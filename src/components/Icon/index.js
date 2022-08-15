export default function Icon(Children, tailwindClasses){
    return (
        <div className={tailwindClasses}>
            <Children></Children>
        </div>
    )
}