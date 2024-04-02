export default function NotFound() {
  return (
    <div className="flex justify-center items-center space-x-8 h-screen">
      <div className="text-center text-2xl self-center">
        Womp Womp <br />
        <span className="text-red-600">404</span>: Page Not Found
      </div>
      <div>
        <img
          src="images/building.gif"
          className="rounded"
        />
      </div>
    </div>
  );
}
