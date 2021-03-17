import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const PRTZL_BUSD_LP_MAINNET = `0x8d0e47e3E58aA3a11a236BC7B94E624A2Cca7eb7`
const PRTZL_BNB_LP_MAINNET = `0xE399899978e32bA3bAdC75fce0B2D391b7ed6302`  
const PRTZL_MAINNET = `0x4c68ACc056176D1C196f7AA07916450CB734EC5a`  

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: 'PRTZL-BUSD LP',
    lpAddresses: {
      97: '',
      56: PRTZL_BUSD_LP_MAINNET,
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '',
      56: PRTZL_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: 'PRTZL-BNB LP',
    lpAddresses: {
      97: '',
      56: PRTZL_BNB_LP_MAINNET,
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '',
      56: PRTZL_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x01b1405bEF38652468C9f43861010eB73E0AA443',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  // pools
  {
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PRTZL',
    lpAddresses: {
      97: '',
      56: PRTZL_BUSD_LP_MAINNET, // PRTZL-BUSD LP
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '',
      56: PRTZL_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: PRTZL_BUSD_LP_MAINNET, // PRTZL-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
].map((farm, index) => ({ ...farm, pid: index }))

export default farms
