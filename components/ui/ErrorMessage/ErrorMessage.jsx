import cn from 'clsx'



const ErrorMessages = ({ error, className }) => {
  return (
    <div
      className={cn(
        'flex flex-col text-red py-2.5 px-4 border border-solid border-red',
        className
      )}
    >
      <span>{error.message}</span>
      {error.errors && error.errors?.length > 0 && (
        <ul className="list-disc list-inside">
          {error.errors.map(({ message }, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ErrorMessages
