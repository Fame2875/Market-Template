export interface Restaurant {
  
    id: number
    name: string
    imgUrl: string
    activeTimePeriod: {
      open: string,
      close: string
    }
  }
  
  export interface ShortMenu {
    name: string
    id: string
    thumbnailImage?: string
    fullPrice: number
    discountedPercent: number
    discountedTimePeriod: {
      begin: string,
      end: string
    }
    sold: number
    totalInStock: number
  }
  
  export interface Option {
    label: string
    choices: Array<{
      lable: string
    }>
  }
  
  export interface FullMenu extends ShortMenu {
    largeImage : string
    options : Array<Option>
  }