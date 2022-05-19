export interface LayoutProps  { 
    children: React.ReactNode
    className:string
    onClick:React.MouseEventHandler
 }

export default function Button(props:LayoutProps){
    return <button className={props.className} onClick = {props.onClick}>{props.children}</button>
}