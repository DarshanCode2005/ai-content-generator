"use client"

import Templates from '@/app/(data)/Templates'
import React, { useState } from 'react'
import {TEMPLATE} from '../../_components/TemplateListSection'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { ArrowLeft} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { chatSession } from '@/utils/AiModal'
import Link from 'next/link'



interface PROPS{
  params: {
    'template-slug':string
  }
}


function CreateNewContent(props:PROPS) {
  const selectedTemplate:TEMPLATE|undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
  const [loading,setLoading] = useState(false)
  const [aiOutput,setAiOutput] = useState<string>('');

  const GenerateAIContent = async (formData:any) => {
    setLoading(true);
    const SelectedPrompt = selectedTemplate?.aiPrompt

    const FinalAIPrompt = JSON.stringify(formData)+", "+SelectedPrompt
  
    const result = await chatSession.sendMessage(FinalAIPrompt)

    // console.log(result.response.text())
    setAiOutput(result?.response.text())
    setLoading(false);
  }

  return (
    <div className='p-5'>
        
        <Link href={"/dashboard"}>
            <Button className='bg-primary flex items-center'><ArrowLeft className='mr-2'/> Back</Button>
        </Link>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
              {/* Formsection */}
              <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any) => GenerateAIContent(v)} loading={loading}/>
              {/* Outputsection */}
              <div className='col-span-2'>
              <OutputSection aiOutput={aiOutput}/>
              </div>
        </div>
    </div>
  )
}

export default CreateNewContent
