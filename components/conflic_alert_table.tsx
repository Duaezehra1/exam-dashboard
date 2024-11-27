import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const ConflictAlertTable = () => {
  return (
       <Table>

    <TableHeader>
      <TableRow>
      <TableHead>
        <div className="text-left flex items-center space-x-4">
          <p>Conflict Type</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
        </div>
        </TableHead>
        <TableHead>
        <div className="text-left flex items-center space-x-4">
          <p>Details</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
        </div>
        </TableHead>
        <TableHead>
        <div className="text-left flex items-center space-x-4">
          <p>Suggested solution</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
        </div>
        </TableHead>
        <TableHead>
        <div className="text-left flex items-center space-x-4">
          <p>Actions</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
        </div>
        </TableHead>
        <TableHead>
        <div className="text-left flex items-center space-x-4">
          <p>Status</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
        </div>
        </TableHead>
      
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow className="bg-blue-100 text-left">
        <TableCell className="font-medium text-left">Hall Overlap</TableCell>
        <TableCell className="text-left">Hall A booked for two exams at 9:00 AM</TableCell>
        <TableCell className="text-left">suggested solution</TableCell>
        <TableCell className="text-left">Resolve/edit</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center  space-x-4">
            <span className="text-orange-800 lato-bold p-[0.05rem] bg-orange-300 w-[50%] text-center">Resolved</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
  
      </TableRow>
      <TableRow className="">
      <TableCell className="font-medium text-left">Hall Overlap</TableCell>
        <TableCell className="text-left">Hall A booked for two exams at 9:00 AM</TableCell>
        <TableCell className="text-left">suggested solution</TableCell>
        <TableCell className="text-left">Resolve/edit</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center  space-x-4">
            <span className="text-red-400 lato-bold p-[0.05rem] bg-red-100 w-[50%] text-center">Priority</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
  
    
      </TableRow>

      <TableRow className="bg-blue-100">
        <TableCell className="font-medium text-left">Hall Overlap</TableCell>
        <TableCell className="text-left">Hall A booked for two exams at 9:00 AM</TableCell>
        <TableCell className="text-left">suggested solution</TableCell>
        <TableCell className="text-left">Resolve/edit</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center  space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-300 w-[50%] text-center">Pending</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
  
      </TableRow>

      <TableRow className="">
      <TableCell className="font-medium text-left">Hall Overlap</TableCell>
        <TableCell className="text-left">Hall A booked for two exams at 9:00 AM</TableCell>
        <TableCell className="text-left">suggested solution</TableCell>
        <TableCell className="text-left">Resolve/edit</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center  space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-300 w-[50%] text-center">Pending</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
      </TableRow>

      <TableRow className="bg-blue-100">
      <TableCell className="font-medium text-left">Hall Overlap</TableCell>
        <TableCell className="text-left">Hall A booked for two exams at 9:00 AM</TableCell>
        <TableCell className="text-left">suggested solution</TableCell>
        <TableCell className="text-left">Resolve/edit</TableCell>
        <TableCell className="text-left">
        <div className="text-left flex items-center  space-x-4">
            <span className="text-blue-800 lato-bold p-[0.05rem] bg-blue-300 w-[50%] text-center">Pendng</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
            </svg>
          </div>
        </TableCell>
  
  
      </TableRow>
    </TableBody>
  </Table>
  )
}
export default ConflictAlertTable