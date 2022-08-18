import { TokenAnnotator } from "react-text-annotate"
import { useContext } from "react"
import { tableContext } from "../../context/table"

export default function Content({tableSpecs,contentData}){
    const {isHighlighted} = useContext(tableContext)
    const text = "It's game day, so which are the teams and opponents that players dread facing the most? How about their favourite kit? (Spoiler: It'll mostly be their own.) And what do they think about LaLiga games being played on foreign soil, as well the number and lateness of matches in a season?"
    return (
        <td colSpan={6} className="pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-none">
            <div className={`overflow-hidden h-${tableSpecs.rowHeight} text-${tableSpecs.contentTextSize} leading-none`}>
            <TokenAnnotator contentEditable="true" spellCheck="false" className={`h-auto xl:pt-2`} tokens={contentData.tokens} value={isHighlighted?contentData.explanation:{}}></TokenAnnotator>
            </div>
        </td>
    )
}