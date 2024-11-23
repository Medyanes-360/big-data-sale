import PageContainer from "@/containers/PageContainers"
import ButtonComponent from "@/globalElements/Button"
import Link from "next/link"

const InfoSection = () => {
  return (
    <div className="bg-info-pattern font-Inter  p-16">
      <PageContainer>
        <div className="flex items-center justify-center gap-8 flex-col text-center">
          <div className="font-Inter font-bold text-[32px] leading-[54px] text-tertiary-900">
            <div className="text-tertiary400">İşletmenizi büyütmek için ihtiyacınız olan</div>
            her şey bir tık uzağınızda
          </div>
          <div className="text-gray700 text-lg leading-6">
            Her sektöre, her ihtiyaca ve her bütçeye uygun veri çözümleriyle, iş hedeflerinizi kolayca gerçekleştirin.
          </div>
          <div className="flex gap-x-3 items-center justify-center">
            <ButtonComponent className="border-[1.5px] border-tertiary400 text-tertiary400 
           h-10 rounded-lg px-[22px] font-Inter font-medium !text-lg leading-10 min-w-[198px] tracking-tight">
              <Link href='/'>Daha Fazla Bilgi Al</Link>
            </ButtonComponent>

            <ButtonComponent className="bg-tertiary400
            h-10 rounded-lg px-[22px] font-Inter  font-medium !text-lg leading-10 min-w-[198px] tracking-tight text-white">
            <Link href='/'>Hemen Başla</Link>
            </ButtonComponent>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}

export default InfoSection