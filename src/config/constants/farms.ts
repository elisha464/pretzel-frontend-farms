import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const PRTZL_BUSD_LP_MAINNET = `0x3BB3B98c0FABE30166E6B7D62aEef393249871E4` // to be updated before deployment
const PRTZL_BNB_LP_MAINNET = `0x5590d45592C846DD820D360dd5Ba6b2610cDeeFB`  // to be updated before deployment
const PRTZL_MAINNET = `0x9066e87Bac891409D690cfEfA41379b34af06391`  // to be updated before deployment

const farms: FarmConfig[] = [
  {
    risk: 5,
    lpSymbol: 'PRTZL-BUSD LP',
    lpAddresses: {
      97: '0x11CE35aa3eE3639C30FEF3Af9A359A638B29Fba8',
      56: PRTZL_BUSD_LP_MAINNET,
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07',
      56: PRTZL_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    risk: 5,
    lpSymbol: 'PRTZL-BNB LP',
    lpAddresses: {
      97: '0x01b1405bEF38652468C9f43861010eB73E0AA443',
      56: PRTZL_BNB_LP_MAINNET,
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07',
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
