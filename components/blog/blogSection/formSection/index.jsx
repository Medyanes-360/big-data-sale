import PageContainer from "@/containers/PageContainers"
import FormArea from "./formArea"
import LabelArea from "./labelArea"

const FormSection = () =>{
    return (
        <section className="pt-8">
            <PageContainer className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-20">
                <FormArea/>
                <LabelArea/>
            </PageContainer>
        </section>
    )
}

export default FormSection