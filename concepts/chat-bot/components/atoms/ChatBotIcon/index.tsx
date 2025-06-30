import Image from "next/image";

const ChatBotIcon: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="\icons\bookly.svg"
        alt="Bookly"
        width={30}
        height={30}
      ></Image>
      <span className="text-xl">LexIA</span>
    </div>
  );
};

export default ChatBotIcon;
