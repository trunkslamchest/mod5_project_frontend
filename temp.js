// def show
// # if current_user_id == user_id.to_i
//   @user = User.find(params[:id])
// #   render json: user, include: :cart_items
// # else
// #   render json: { go_away: true }, status: :unauthorized
// # end
//   # render json: user, include: :cart_items
//   # byebug
// 	render json: UsersSerializer.new(@user).serialized_json
// end