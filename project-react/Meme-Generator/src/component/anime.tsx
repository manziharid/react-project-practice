import Spider from '../src/spider.mp4'

export default function Anime() {
  return (
    <div className="w-[1293px] h-[409px]">
      <video 
        className="w-full h-full object-cover" 
        controls 
        poster="thumbnail.jpg"
      >
        <source src={Spider} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
