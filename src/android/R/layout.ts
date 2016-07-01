module android.R {
    const _layout_data = {
        "action_bar": "<merge>\n    <linearlayout id=\"action_bar_center_layout\" android:layout_marginLeft=\"60dp\" android:layout_marginRight=\"60dp\" android:minHeight=\"48dp\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview id=\"action_bar_title\" android:gravity=\"center\" android:drawablePadding=\"4dp\" android:singleLine=\"true\" android:ellipsize=\"end\" android:textColor=\"@android:color/white\" android:textSize=\"18sp\"></textview>\n        <textview id=\"action_bar_sub_title\" android:visibility=\"gone\" android:gravity=\"center\" android:layout_marginTop=\"4dp\" android:drawablePadding=\"4dp\" android:singleLine=\"true\" android:ellipsize=\"end\" android:textColor=\"@android:color/white\" android:textSize=\"12sp\"></textview>\n    </linearlayout>\n    <button id=\"action_bar_left\" android:visibility=\"gone\" android:layout_gravity=\"left|center_vertical\" android:layout_width=\"wrap_content\" android:background=\"@android:drawable/item_background\" android:textColor=\"@android:color/white\" android:paddingLeft=\"6dp\" android:paddingRight=\"6dp\" android:drawablePadding=\"4dp\" android:minWidth=\"32dp\" android:textSize=\"17sp\" android:singleLine=\"true\"></button>\n    <button id=\"action_bar_right\" android:visibility=\"gone\" android:layout_gravity=\"right|center_vertical\" android:layout_width=\"wrap_content\" android:background=\"@android:drawable/item_background\" android:textColor=\"@android:color/white\" android:paddingRight=\"6dp\" android:paddingLeft=\"6dp\" android:drawablePadding=\"4dp\" android:minWidth=\"32dp\" android:textSize=\"17sp\" android:singleLine=\"true\"></button>\n</merge>",
        "alert_dialog": "<linearlayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:layout_marginStart=\"8dip\" android:layout_marginEnd=\"8dip\" android:orientation=\"vertical\" id=\"parentPanel\">\n\n    <linearlayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:orientation=\"vertical\" id=\"topPanel\">\n        <view android:layout_width=\"match_parent\" android:layout_height=\"1dip\" android:visibility=\"gone\" android:background=\"#aaa\" id=\"titleDividerTop\"></view>\n        <linearlayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:orientation=\"horizontal\" android:gravity=\"center_vertical|start\" android:minHeight=\"64dp\" android:layout_marginStart=\"16dip\" android:layout_marginEnd=\"16dip\" id=\"title_template\">\n            <imageview android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:paddingEnd=\"8dip\" id=\"icon\"></imageview>\n            <textview android:maxLines=\"1\" android:scrollHorizontally=\"true\" android:textSize=\"22sp\" android:textColor=\"#333\" android:singleLine=\"true\" android:ellipsize=\"end\" android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:textAlignment=\"viewStart\" id=\"alertTitle\"></textview>\n        </linearlayout>\n        <view android:layout_width=\"match_parent\" android:layout_height=\"1dip\" android:visibility=\"gone\" android:background=\"#aaa\" id=\"titleDivider\"></view>\n        <!-- If the client uses a customTitle, it will be added here. -->\n    </linearlayout>\n\n    <linearlayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:layout_weight=\"1\" android:orientation=\"vertical\" android:minHeight=\"64dp\" id=\"contentPanel\">\n        <scrollview android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:clipToPadding=\"false\" id=\"scrollView\">\n            <textview android:textSize=\"18sp\" android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:paddingStart=\"16dip\" android:paddingEnd=\"16dip\" android:paddingTop=\"8dip\" android:paddingBottom=\"8dip\" id=\"message\"></textview>\n        </scrollview>\n    </linearlayout>\n\n    <framelayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:layout_weight=\"1\" android:minHeight=\"64dp\" id=\"customPanel\">\n        <framelayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" id=\"custom\"></framelayout>\n    </framelayout>\n\n    <linearlayout android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:minHeight=\"48dip\" android:orientation=\"vertical\" android:divider=\"@android:drawable/divider_horizontal\" android:showDividers=\"beginning\" android:dividerPadding=\"0dip\" id=\"buttonPanel\">\n        <linearlayout android:divider=\"@android:drawable/divider_vertical\" android:showDividers=\"middle\" android:dividerPadding=\"0dp\" android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:orientation=\"horizontal\" android:layoutDirection=\"locale\" android:measureWithLargestChild=\"true\">\n            <button android:layout_width=\"wrap_content\" android:layout_gravity=\"start\" android:layout_weight=\"1\" android:maxLines=\"2\" android:paddingStart=\"4dp\" android:paddingEnd=\"4dp\" android:background=\"@android:drawable/item_background\" android:textSize=\"14sp\" android:minHeight=\"48dp\" android:layout_height=\"wrap_content\" id=\"button2\"></button>\n            <button android:layout_width=\"wrap_content\" android:layout_gravity=\"center_horizontal\" android:layout_weight=\"1\" android:maxLines=\"2\" android:paddingStart=\"4dp\" android:paddingEnd=\"4dp\" android:background=\"@android:drawable/item_background\" android:textSize=\"14sp\" android:minHeight=\"48dp\" android:layout_height=\"wrap_content\" id=\"button3\"></button>\n            <button android:layout_width=\"wrap_content\" android:layout_gravity=\"end\" android:layout_weight=\"1\" android:maxLines=\"2\" android:paddingStart=\"4dp\" android:paddingEnd=\"4dp\" android:background=\"@android:drawable/item_background\" android:textSize=\"14sp\" android:minHeight=\"48dp\" android:layout_height=\"wrap_content\" id=\"button1\"></button>\n        </linearlayout>\n     </linearlayout>\n</linearlayout>",
        "alert_dialog_progress": "<relativelayout android:layout_width=\"wrap_content\" android:layout_height=\"match_parent\">\n    <progressbar style=\"@android:attr/progressBarStyleHorizontal\" android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:layout_marginTop=\"16dip\" android:layout_marginBottom=\"1dip\" android:layout_marginStart=\"16dip\" android:layout_marginEnd=\"16dip\" android:layout_centerHorizontal=\"true\" id=\"progress\"></progressbar>\n    <textview android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:paddingBottom=\"16dip\" android:layout_marginStart=\"16dip\" android:layout_marginEnd=\"16dip\" android:layout_alignParentStart=\"true\" android:layout_below=\"progress\" id=\"progress_percent\"></textview>\n    <textview android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:paddingBottom=\"16dip\" android:layout_marginStart=\"16dip\" android:layout_marginEnd=\"16dip\" android:layout_alignParentEnd=\"true\" android:layout_below=\"progress\" id=\"progress_number\"></textview>\n</relativelayout>",
        "popup_menu_item_layout": "<linearlayout android:layout_width=\"match_parent\" android:layout_height=\"48dp\" android:minWidth=\"196dip\" android:paddingEnd=\"16dip\">\n\n    <imageview android:visibility=\"gone\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:layout_gravity=\"center_vertical\" android:layout_marginStart=\"8dip\" android:layout_marginEnd=\"-8dip\" android:layout_marginTop=\"8dip\" android:layout_marginBottom=\"8dip\" android:scaleType=\"centerInside\" android:duplicateParentState=\"true\" id=\"icon\"></imageview>\n    \n    <!-- The title and summary have some gap between them, and this 'group' should be centered vertically. -->\n    <relativelayout android:layout_width=\"0dip\" android:layout_weight=\"1\" android:layout_height=\"wrap_content\" android:layout_gravity=\"center_vertical\" android:layout_marginStart=\"16dip\" android:duplicateParentState=\"true\">\n\n        <textview android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:layout_alignParentTop=\"true\" android:layout_alignParentStart=\"true\" android:textColor=\"@android:color/primary_text_dark_disable_only\" android:textSize=\"18sp\" android:singleLine=\"true\" android:duplicateParentState=\"true\" android:ellipsize=\"marquee\" android:fadingEdge=\"horizontal\" android:textAlignment=\"viewStart\" id=\"title\"></textview>\n\n        <textview android:visibility=\"gone\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:layout_below=\"title\" android:layout_alignParentStart=\"true\" android:textColor=\"@android:color/primary_text_dark_disable_only\" android:textSize=\"12sp\" android:singleLine=\"true\" android:duplicateParentState=\"true\" android:textAlignment=\"viewStart\" id=\"shortcut\"></textview>\n\n    </relativelayout>\n\n    <!-- Checkbox, and/or radio button will be inserted here. -->\n    \n</linearlayout>",
        "select_dialog": "<view class=\"android.app.AlertController.RecycleListView\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" android:cacheColorHint=\"@null\" android:divider=\"@android:drawable/list_divider\" android:scrollbars=\"vertical\" android:overScrollMode=\"ifContentScrolls\" android:textAlignment=\"viewStart\" id=\"select_dialog_listview\"></view>",
        "select_dialog_item": "<textview android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:minHeight=\"48dp\" android:textSize=\"18sp\" android:gravity=\"center_vertical\" android:paddingStart=\"16dip\" android:paddingEnd=\"16dip\" android:ellipsize=\"end\" id=\"text1\"></textview>",
        "select_dialog_multichoice": "<checkedtextview android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:minHeight=\"48dp\" android:textSize=\"18sp\" android:gravity=\"center_vertical\" android:paddingStart=\"16dip\" android:paddingEnd=\"16dip\" android:checkMark=\"@android:drawable/btn_check\" android:ellipsize=\"end\" id=\"text1\"></checkedtextview>",
        "select_dialog_singlechoice": "<checkedtextview android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:minHeight=\"48dp\" android:textSize=\"18sp\" android:gravity=\"center_vertical\" android:paddingStart=\"16dip\" android:paddingEnd=\"16dip\" android:checkMark=\"@android:drawable/btn_radio\" android:ellipsize=\"end\" id=\"text1\"></checkedtextview>",
        "simple_spinner_dropdown_item": "<checkedtextview android:paddingStart=\"8dp\" android:paddingEnd=\"8dp\" android:textColor=\"@android:color/primary_text_light_disable_only\" android:gravity=\"center_vertical\" android:singleLine=\"true\" android:layout_width=\"match_parent\" android:layout_height=\"48dp\" android:ellipsize=\"end\" android:textAlignment=\"inherit\" id=\"text1\"></checkedtextview>",
        "simple_spinner_item": "<textview android:paddingStart=\"8dp\" android:paddingEnd=\"8dp\" android:textColor=\"@android:color/primary_text_light_disable_only\" android:gravity=\"center_vertical\" android:singleLine=\"true\" android:layout_width=\"match_parent\" android:layout_height=\"wrap_content\" android:ellipsize=\"end\" android:textAlignment=\"inherit\" id=\"text1\"></textview>",
        "transient_notification": "<linearlayout android:layout_width=\"match_parent\" android:layout_height=\"match_parent\" android:orientation=\"vertical\" android:background=\"@android:drawable/toast_frame\">\n\n    <textview android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:layout_weight=\"1\" android:layout_gravity=\"center_horizontal\" android:textColor=\"white\" android:shadowColor=\"#BB000000\" android:shadowRadius=\"2.75\" id=\"message\"></textview>\n\n</linearlayout>"
};
    const _tempDiv = document.createElement('div');

    export class layout{
        static getLayoutData(layoutName:string):HTMLElement{
            if(!layoutName) return null;
            if(!_layout_data[layoutName]) return null;
            _tempDiv.innerHTML = _layout_data[layoutName];
            let data = <HTMLElement>_tempDiv.firstElementChild;
            _tempDiv.removeChild(data);
            return data;
        }
        
        static action_bar = '@android:layout/action_bar';
        static alert_dialog = '@android:layout/alert_dialog';
        static alert_dialog_progress = '@android:layout/alert_dialog_progress';
        static popup_menu_item_layout = '@android:layout/popup_menu_item_layout';
        static select_dialog = '@android:layout/select_dialog';
        static select_dialog_item = '@android:layout/select_dialog_item';
        static select_dialog_multichoice = '@android:layout/select_dialog_multichoice';
        static select_dialog_singlechoice = '@android:layout/select_dialog_singlechoice';
        static simple_spinner_dropdown_item = '@android:layout/simple_spinner_dropdown_item';
        static simple_spinner_item = '@android:layout/simple_spinner_item';
        static transient_notification = '@android:layout/transient_notification';
    }
}