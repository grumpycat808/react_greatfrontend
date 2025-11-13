import { fileData } from './fileData'
import FileDirectory from './FileDirectory'
function FileExplorer(props) {
    console.log(fileData)
    const displayDirectory = (data) => {
        return data.map((item, index) => {
            if (item.hasOwnProperty('children')) {
                return (
                    <li key={index}>
                        <FileDirectory name={item.name}>
                            <ul>{displayDirectory(item.children)}</ul>
                        </FileDirectory>
                    </li>
                )
            } else {
                return <li key={index}>{item.name}</li>
            }
        })
    }
    return (
        <div>
            <ul>{displayDirectory(fileData)}</ul>
        </div>
    )
}

export default FileExplorer
