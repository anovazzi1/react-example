import { TokenAnnotator } from "react-text-annotate"
import { useContext } from "react"
import { tableContext } from "../../context/table"

export default function Content({tableSpecs,contentData}){
    const {isHighlighted} = useContext(tableContext)
    return (
        <td colSpan={6} className="pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-none">
            <div className={`overflow-hidden h-${tableSpecs.rowHeight} text-${tableSpecs.contentTextSize} leading-none`}>
            <TokenAnnotator contentEditable="true" spellCheck="false" className={`h-auto xl:pt-2`} tokens={contentData.tokens} value={isHighlighted?contentData.explanation:{}}></TokenAnnotator>
            </div>
        </td>
    )
}