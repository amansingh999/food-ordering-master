export default function Notadmin() {
  return (
    <div className='flex flex-col items-center justify-center h-screen  text-center p-6'>
      <h1 className='text-3xl font-bold text-red-600'>Access Denied</h1>
      <p className='text-lg text-gray-700 mt-2'>
        You do not have the necessary permissions to view this page.
      </p>
      <button
        onClick={() => (window.location.href = '/')}
        className='mt-4 px-4 py-2 w-48 bg-blue-600 text-white rounded-md hover:bg-blue-700'
      >
        Go to Homepage
      </button>
    </div>
  );
}
