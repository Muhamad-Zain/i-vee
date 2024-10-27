import Image from "next/image";
import ImgAnimation from "@/assets/img/animate/flower.png"


export default function Page3 (){
    return(
        <section className='bg-slate-900'>
            {/* <svg></svg> */}
            <div className="flex justify-around  ">
                <Image src={ImgAnimation} alt="Img-Naimation" className="text-white w-1/2 "  />
                <Image src={ImgAnimation} alt="Img-Naimation" className="text-white w-1/2"  />
            </div>
            <div className='text-center px-5'>
                <p>{`"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."`} </p>
            </div>
        </section>
    )
}