from django import forms

from socialapp.models import TripComment


class TripCommentCreateForm(forms.ModelForm):
    class Meta:
        model = TripComment
        fields = ['trip', 'content', 'score']


class FullTripCommentCreateForm(TripCommentCreateForm):
    photos = forms.FileField(widget=forms.ClearableFileInput(attrs={'multiple': True}))

    class Meta(TripCommentCreateForm.Meta):
        fields = TripCommentCreateForm.Meta.fields + ['photos', ]