import { useEffect, useRef, useState } from "react";
import BottomSheet from "../../components/BottomSheet";
import BottomBar from "../../widgets/BottomBar";
import Navbar from "../../widgets/Navbar";
import PlacesList from "../../widgets/PlacesList";
import PlacesListsBar from "../../widgets/PlacesListsBar";
import autoAnimate from "@formkit/auto-animate";
import AddLocationForm from "../../widgets/AddLocationForm";

const Home = () => {
  const [show, setShow] = useState(false);
  const parent = useRef(null);

  useEffect(() => {
    parent.current &&
      autoAnimate(parent.current, (el, action) => {
        let keyframes: Keyframe[] = [];
        // supply a different set of keyframes for each action
        if (action === "add") {
          keyframes = [
            { transform: "translateY(100%)", transformOrigin: "bottom" },
            { transform: "translateY(0)", transformOrigin: "bottom" },
          ];
        }

        if (action === "remove") {
          keyframes = [
            { transform: "translateY(0)", transformOrigin: "bottom" },
            { transform: "translateY(100%)", transformOrigin: "bottom" },
          ];
        }

        return new KeyframeEffect(el, keyframes, { duration: 250, easing: "ease-in-out" });
      });
  }, [parent]);

  const reveal = () => setShow(true);
  const hide = () => setShow(false);

  return (
    <div>
      <Navbar />
      <div className="h-2" />
      <div className="sticky top-0 z-30 bg-white">
        <PlacesListsBar />
      </div>
      <div className="h-2" />
      <PlacesList />
      <div className="h-24" />
      <BottomBar onAddLocation={reveal} />
      <div ref={parent}>
        {show && (
          <BottomSheet>
            <AddLocationForm onClose={hide} />
          </BottomSheet>
        )}
      </div>
    </div>
  );
};

export default Home;
