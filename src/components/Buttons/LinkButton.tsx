import { LinkButtonProps } from './types'

const LinkButton: React.FC<LinkButtonProps> = (props) => {
  const { link, text } = props

  return (
    <a
      href={link}
      className="
        flex
        items-center
        space-x-2
        bg-custom-blue
        hover:bg-custom-dark-blue
        text-gray-100
        px-4 py-2
        mt-6 rounded
      "
    >
      {text}
    </a>
  )
}

export default LinkButton
