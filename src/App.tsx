import { PlateEditor } from './components/editor';
import { TooltipProvider } from './components/plate-ui/tooltip';

function App() {
  return (
    <TooltipProvider>
      <div className="mt-12 p-10 w-[800px]">
        <PlateEditor />
      </div>
    </TooltipProvider>
  );
}

export default App;
