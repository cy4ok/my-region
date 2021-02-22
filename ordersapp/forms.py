from django import forms

from ordersapp.models import OrderItem


class OrderItemForm(forms.ModelForm):
    options_used = forms.MultipleChoiceField(required=False)

    class Meta:
        model = OrderItem
        fields = []
