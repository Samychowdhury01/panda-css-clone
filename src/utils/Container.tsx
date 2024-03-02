import TProps from '../Types/TProps';


const Container : React.FC<TProps> = ({children}) => {
    return (
        <div className='container'>
            {children}
        </div>
    );
};

export default Container;