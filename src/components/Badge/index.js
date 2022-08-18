export default function Badge({name,color,contentEditable="false"})
{
    return (
        <span contentEditable={contentEditable} class={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-200 dark:text-${color}-800`}>{name}</span>
    )
}