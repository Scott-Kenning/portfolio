export const ImageContainer = (props: {children: any}) => {
    return (
        <div className='h-full block rounded-xl oveflow-hidden p-4'>
            {props.children}
        </div>
        
    )
}