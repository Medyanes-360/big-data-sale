import PageContainer from '@/containers/PageContainers'
import React from 'react'
import SearchArea from './searchArea'
import ImportanceLevel from './importanceLevel'
import MustRead from './mustRead'

const BlogMustRead = () => {
    return (
        <PageContainer>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col w-full lg:w-[50%] gap-8 p-6 rounded-[32px] bg-white shadow-lg">
                    <SearchArea />
                    <ImportanceLevel />
                </div>
                <div className="w-full">
                    <MustRead />
                </div>
            </div>


        </PageContainer>
    )
}

export default BlogMustRead
