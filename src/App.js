import React from "react";
import "./App.css";

function App() {
	return (
		<div className="wrapper">
			<div className="sky"></div>

			<div className="earth">
				<div className="red-queen-and-alice">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
						alt="red-queen_and_alice_sprite"
						srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
					/>
				</div>
			</div>

			<div className="scenery foreground1">
				<img
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
					alt=" "
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png 2x"
				/>
			</div>

			<div class="scenery foreground2">
				<img
					className="bush"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
					alt=" "
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png 2x"
				/>
				<img
					className="w_rook_upright"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
					alt=" "
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png 2x"
				/>
			</div>

			<div className="scenery background1">
				<img
					className="r_pawn_upright"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
					alt=" "
				/>
				<img
					className="w_rook"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
					alt=" "
				/>
				<img
					className="palm1"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
					alt=" "
				/>
			</div>

			<div className="scenery background2">
				<img
					className="r_pawn"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
					alt=" "
				/>

				<img
					className="r_knight"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
					alt=" "
				/>
				<img
					className="palm2"
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
					srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
					alt=" "
				/>
			</div>
		</div>
	);
}

export default App;
