export interface LayoutProps  { 
    children: React.ReactNode
 }

export default function Menu (props: LayoutProps ){
    return <div className="menu-container">{props.children}</div>

}
   
 