export const PageLink = (url: string, text: string) => {
    return (
        <a 
          href={url}
          target="blank"
          className='font-my-4 text-black dark:text-gray-200 text-xl underline hover:scale-105 hover:text-gray-600'>
            {text}
        </a>
    )
}