class PostPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def new?
    true
  end

  def create?
    true
  end

  def feed?
    true
  end

  def gif?
    true
  end

  def destroy?
    record.user == user
  end
end
