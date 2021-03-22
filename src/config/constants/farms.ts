import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'PRTZL-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7bc177adeb0a556954d627eff4cb9d3e49f1ad1d',
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '',
      56: '0xbb75BB4eBB6cE425D3E11d325720a61bb420d20e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid:1,
    risk: 5,
    lpSymbol: 'PRTZL-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xf6a03b6638c30549d6b2c6ffa8dcdd6cd2679718',
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '',
      56: '0xbb75BB4eBB6cE425D3E11d325720a61bb420d20e',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2, 
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
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PRTZL',
    lpAddresses: {
      97: '',
      56: '0x7bc177adeb0a556954d627eff4cb9d3e49f1ad1d', // PRTZL-BUSD LP
    },
    tokenSymbol: 'PRTZL',
    tokenAddresses: {
      97: '',
      56: '0xbb75BB4eBB6cE425D3E11d325720a61bb420d20e',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4, 
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x7bc177adeb0a556954d627eff4cb9d3e49f1ad1d', // PRTZL-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
