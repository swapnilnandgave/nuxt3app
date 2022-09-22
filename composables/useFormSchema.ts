import dynamicPages from "@/src/form/dynamicPages.json";
import dynamicFieldSchema from "@/src/form/dynamicFieldSchema.json";

export const useDynamicFieldSchema = () => { 
    return useState('dynamicFieldSchema', () => dynamicFieldSchema)
}

export const useDynamicPagesSchema = () => { 
    return useState('dynamicPages', () => dynamicPages)
}

export const useDynamicPageSchema = (pageID: string) => { 
    return useState('dynamicPage', () => dynamicPages.pages.filter((val) => val.id == pageID)[0])
}