import PageContainer from "@/containers/PageContainers"
import ButtonComponent from "@/globalElements/Button"
import Link from "next/link"

const InfoSection = () => {
  return (
    <div className="bg-info-pattern font-Inter py-10">
      <PageContainer>
        <div className="flex flex-col text-center items-center justify-center py-6 gap-4 md:gap-8">
          <div className="font-lexend md:font-Inter flex flex-col justify-center items-center font-medium md:font-bold text-[16px] leading-6 md:text-[32px] md:leading-[54px] text-tertiary-900">
            <span className="text-tertiary400">İşletmenizi büyütmek için ihtiyacınız olan</span>
            her şey bir tık uzağınızda
          </div>
          <div className="text-gray700 font-medium md:font-normal md:text-[18px] md:leading-6 text-base">
            Her sektöre, her ihtiyaca ve her bütçeye uygun veri çözümleriyle, iş hedeflerinizi kolayca gerçekleştirin.
          </div>
          <div className="flex md:flex-row flex-col gap-3 w-full md:max-x-[408px] items-center justify-center">
            <ButtonComponent className="border-[1.5px] border-tertiary400 text-tertiary400 h-10 rounded-lg px-4 font-Inter font-medium !text-[18px] leading-10 !w-full md:!max-w-[198px] tracking-tight">
              <Link href='/'>Daha Fazla Bilgi Al</Link>
            </ButtonComponent>
            <ButtonComponent className="bg-tertiary400 h-10 rounded-lg px-8 font-Inter font-medium !text-[18px] leading-10 !w-full md:!max-w-[198px] tracking-tight text-white-default">
            <Link href='/'>Hemen Başla</Link>
            </ButtonComponent>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default InfoSection