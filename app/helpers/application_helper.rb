module ApplicationHelper
  def display_photo(user)
    if user.photo.attached?
      user.photo.key
    else
      "https://cdn.imagecomics.com/assets/img/default-user-square.svg"
    end
  end

  include ActionView::Helpers::DateHelper
end
