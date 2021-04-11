class ChangeTypeToSchedule < ActiveRecord::Migration[6.0]
  def change
    rename_column :jobs, :type, :schedule
  end
end
