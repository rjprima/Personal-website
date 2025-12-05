

export default function Cloudobj({ text,scale=1 }) {
    const textscale = (1.0/scale)*100;

    const custom = {
        transform: `scale(${scale})`,
        height: `100px`,
        width: `100px`,
        fontSize: `${textscale}%`
    };
    return (
        <div style={custom} className="">
            <div className="relative bg-(--colormode1) h-[50px] w-[100px] z-8 top-[-1px] left-[-4px] text-center">{text}</div>
            <div className="absolute bg-(--colormode1) h-[50px] w-[50px] rounded-[100px] top-[0px] left-[-30px] z-1 border border-black"></div>
            <div className="absolute bg-(--colormode1) h-[60px] w-[60px] rounded-[100px] top-[-25px] left-[-10px] z-2 border border-black"></div>
            <div className="absolute bg-(--colormode1) h-[50px] w-[50px] rounded-[100px] top-[-20px] left-[40px] z-3 border border-black"></div>
            <div className="absolute bg-(--colormode1) h-[53px] w-[53px] rounded-[100px] top-[-2px] left-[65px] z-4 border border-black"></div>
            <div className="absolute bg-(--colormode1) h-[50px] w-[50px] rounded-[100px] top-[15px] left-[-2px] z-5 border border-black"></div>
            <div className="absolute bg-(--colormode1) h-[50px] w-[50px] rounded-[100px] top-[20px] left-[40px] z-6 border border-black"></div>
        </div>
    );
}