
export default function Layout({children}:{
    children: React.ReactNode
}){
    return (
        <div 
         className="flex flex-col h-screen w-full overflow-hidden bg-background">
         <div className="flex-1 overflow-y-auto bg-gray-50">
           {children}
         </div>
        </div>
    );
}