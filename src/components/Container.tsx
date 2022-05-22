export interface LayoutProps  { 
    children: React.ReactNode
    className:string
 }

export default function Container (props: LayoutProps ){
    return <div className={props.className}>{props.children}</div>

}
   
 