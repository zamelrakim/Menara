const SubmitBtn = ({ value }: { value: string }) => {
    return <input 
        type="submit" 
        value={value} 
        className="text-white bg-black rounded my-2 p-2"
        />
}

export default SubmitBtn