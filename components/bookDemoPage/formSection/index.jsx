import PageContainer from "@/containers/PageContainers"
import FormHeader from "./formHeader"
import FormArea from "./formArea"

const FormSection = () => {
    return (
        <section className="pt-8">
            <PageContainer>
                <div className="flex flex-col shadow-blog rounded-3xl px-3 md:px-8 py-6 gap-3 md:gap-10 max-w-[521px]">
                    <FormHeader />
                    <FormArea />
                </div>
            </PageContainer>
        </section>
    )


}


export default FormSection