import { TokenAnnotator } from "react-text-annotate"

export default function Content(){
    const text = "It's game day, so which are the teams and opponents that players dread facing the most? How about their favourite kit? (Spoiler: It'll mostly be their own.) And what do they think about LaLiga games being played on foreign soil, as well the number and lateness of matches in a season?"
    return (
        <td colSpan={6} className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
            <TokenAnnotator contentEditable="true" spellCheck="false" className="h-28 text-lg" tokens={text.split(' ')} value={[{start:0,end:1,color:""}]}></TokenAnnotator>
        </td>
    )
}