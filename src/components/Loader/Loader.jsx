import { Puff } from 'react-loader-spinner'
import { Wrapper } from './Loader.styled'

export const Loader = () => {
    return (<Wrapper><Puff
  height="100"
  width="100"
  radisu={1}
  color="#45f3ff"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/></Wrapper>)}